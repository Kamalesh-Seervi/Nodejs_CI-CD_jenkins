# nodejs-app-mss

To start this application first you can get this repo code using below url

git clone 
```
https://github.com/Kamalesh-Seervi/Nodejs_CI-CD_jenkins.git 
```

cd nodejs-app-mss

npm install

**node app.js**

(OR) 

npm start

To execute Test cases, we will run the below command

npm test

To Execute the SonarQube Repor, execute the below command.

npm run sonar

(OR) 

node sonar-project.js


### Generate the Nexus token by using base64 encoding as follows.
```
echo -n 'admin:passw0rd' | openssl base64
```

### Create a .npmrc file in your project root directory and add below lines.

```
registry=<<NexusRepoURL>>
_auth=<<Token>>
email=<<EmailID>>
always-auth=true
```


### In package.json add below entry,

"publishConfig": {

"registry": "http://IPAddress:8081/repository/nodejs-mithuntechnologies/"

}

  npm login --registry=NexusRepoURL
  
Execute below command to upload packages to nexus repo.

npm publish
  
  
## OUTPUT:

- Jenkins Job:

<img width="1552" alt="image" src="https://github.com/Kamalesh-Seervi/Nodejs_CI-CD_jenkins/assets/107933310/ac276b6f-d68e-4fb1-9e57-59875e1f56d1">

- SonarQube:

<img width="1552" alt="image" src="https://github.com/Kamalesh-Seervi/Nodejs_CI-CD_jenkins/assets/107933310/943958f8-1dab-45d0-a272-10dec7f0e2f7">

- Nexus :

<img width="1552" alt="image" src="https://github.com/Kamalesh-Seervi/Nodejs_CI-CD_jenkins/assets/107933310/b9dd6342-7fd1-475c-bed3-876a6857ca9f">




