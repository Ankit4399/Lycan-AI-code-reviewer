import {App} from 'octokit'

let githubApp : App | null = null;

export function getGithubApp(){
    if(!githubApp){
        githubApp = new App({
            appId : process.env.GITHUB_APP_ID!,
            privateKey : process.env.GITHUB_APP_PRIVATE_KEY!.replace(/\\n/g, "\n"),
            webhooks : {
                secret: process.env.GITHUB_WEBHOOK_SECRET!
            }
        })
    }
    return githubApp;
}

export function getGithubInstallUrl(userId : string){
    
    const url = new URL(`https://github.com/apps/lycan-review/installations/new`)

    //So the main purpose of state here is to remember which user initiated the GitHub App installation so you can associate the returned installation_id with the correct account in your application.
    url.searchParams.set("state",userId)
    return url.toString();
}