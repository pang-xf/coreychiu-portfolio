// src/app/api/rebuild/route.ts
import { NextRequest } from 'next/server'

interface VercelDeployHookResponse {
  job: {
    id: string;
    state: string;
  };
}

export async function POST(request: NextRequest) {
  try {
    // 环境变量验证
    const projectId = process.env.VERCEL_PROJECT_ID;
    const accessToken = process.env.VERCEL_ACCESS_TOKEN;

    if (!projectId || !accessToken) {
      return new Response(JSON.stringify({ 
        error: 'Missing required environment variables' 
      }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }

    // 触发重新部署
    const response = await fetch(
      `https://api.vercel.com/v1/integrations/deploy/prj_sBA1TdrCEdCrVKB9YvbYb1DQkGGB/CvmlrP2dTC`,
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

    return new Response(JSON.stringify({
      message: `Build triggered successfully. Job ID: ${data.job.id}`,
      timestamp: new Date().toISOString()
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });

  } catch (error) {
    console.error('Build trigger error:', error);
    return new Response(JSON.stringify({
      error: 'Failed to trigger build',
      details: error instanceof Error ? error.message : 'Unknown error occurred'
    }), {
      status: 500,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
}

export async function GET(request: NextRequest) {
  return POST(request);
}