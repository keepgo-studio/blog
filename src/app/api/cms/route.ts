import { Octokit } from "octokit";

export async function GET() {
  const ocotokit = new Octokit({
    auth: process.env.GITHUB_API_TOKEN
  });
  
  const data = await ocotokit.request("GET /repos/{owner}/{repo}/contents/{path}", {
    owner: process.env.GITHUB_OWNER,
    repo: 'cms',
    path: '',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  })
  .then(res => res.data);

  return Response.json(data)
}