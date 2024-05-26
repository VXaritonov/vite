pipeline {
    agent any
    stages {
        stage('Install dependencies') {
            steps {
                powershell "npm run install"
            }
        }
        stage('Test') {
            steps {
                powershell "npm run lint"
                powershell "npm run stylelint"
                powershell "npm run test"
                powershell "npm run e2e-run"
            }
        }
        stage('Build') {
            steps {
                powershell "npm run build"
            }
        }
    }
}
