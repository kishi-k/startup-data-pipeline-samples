#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { AuroraTroccoSampleStack } from '../lib/aurora-trocco-sample-stack';
import { config } from '../config/config';


const app = new cdk.App();
new AuroraTroccoSampleStack(app, 'AuroraTroccoSampleStack', { 
    troccoIPs: config.troccoIPs,
    sampleDataBucket: config.sampleDataBucket,
    troccoAWSAccountId: config.troccoAWSAccountId,
    troccoTargetBucket: config.troccoTargetBucket,
    troccoExternalID: config.troccoExternalId,
});
