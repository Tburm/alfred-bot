#!/bin/bash
echo """
runtime: nodejs14
instance_class: F1
automatic_scaling:
  max_instances: 1
env_variables:
  GCLOUD_PROJECT: \"$GCLOUD_PROJECT\"
  BOT_TOKEN: \"$BOT_TOKEN\"
"""
