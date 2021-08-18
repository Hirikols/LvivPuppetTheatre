// pipeline {
//     agent none

//     stages {
//         stage('Build') {
//             agent {
//                 dockerfile true
//             }
            
//             steps{     

//             }
//         }
//         stage('Test') {
//             agent{
//                 docker {image 'node:8-alpine'}
//             }
//             steps{
//                 sh 'npm install'
//                 sh 'npm test --watchAll=false'
//             }
//         }
//         stage('Deploy'){
//             steps{
//                 echo 'Deploy'
//             }
//         }
//     }
// }

pipeline {
    agent {
        docker { image 'node:14-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'node --version'
            }
        }
    }
}