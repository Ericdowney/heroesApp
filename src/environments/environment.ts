// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

// heroesUrl: 'https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes',
export const environment = {
    production: false,
    heroesUrl: 'https://uhfxxujepg.execute-api.us-east-1.amazonaws.com/dev/heroes',
    heroGroupsUrl: 'https://3c52fab9ag.execute-api.us-east-1.amazonaws.com/dev/herogroups',
    heroSkillsUrl: 'https://4vpran6rbd.execute-api.us-east-1.amazonaws.com/dev/heroskills',
};
