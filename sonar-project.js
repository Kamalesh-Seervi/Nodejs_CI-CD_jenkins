const sonarqubeScanner = require('sonarqube-scanner');

sonarqubeScanner({
  serverUrl: 'http://3.93.23.85:9000/',
       options : {
	    'sonar.projectDescription': 'This is a Node JS application',
	    'sonar.projectName': 'NodeJS_CI/CD',
	    // 'sonar.projectKey':'NodeJsMithunTechnologies',
	    // 'sonar.login': 'squ_ea242826a04b9a6b8818f9f594f81dd8a5979a5e',
	    'sonar.login': 'admin',
	    'sonar.password': 'admin',
            'sonar.projectVersion':'1.0',
	    'sonar.language':'js',
            'sonar.sourceEncoding':'UTF-8',
            'sonar.sources': '.',
	  //'sonar.tests': 'specs',
          //'sonar.inclusions' : 'src/**'
       },
}, () => {});
