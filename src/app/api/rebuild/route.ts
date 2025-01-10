// pages/api/rebuild.ts
import type { NextApiRequest, NextApiResponse } from 'next';

type ResponseData = {
  message: string;
  timestamp?: string;
} | {
  error: string;
  details?: string;
}

interface VercelDeployHookResponse {
  job: {
    id: string;
    state: string;
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  // 只允许 POST 请求
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // 环境变量验证
    const projectId = process.env.VERCEL_PROJECT_ID;
    const accessToken = process.env.VERCEL_ACCESS_TOKEN;

    if (!projectId || !accessToken) {
      throw new Error('Missing required environment variables');
    }

    // 触发重新部署
    const response = await fetch(
      `https://api.vercel.com/v1/integrations/deploy/${projectId}/YuM9rFYEGAtQFTbUtqHH8PrV`,
      {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(`Deployment failed: ${JSON.stringify(errorData)}`);
    }

    const data: VercelDeployHookResponse = await response.json();

    return res.status(200).json({
      message: `Build triggered successfully. Job ID: ${data.job.id}`,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Build trigger error:', error);
    return res.status(500).json({
      error: 'Failed to trigger build',
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    });
  }
}