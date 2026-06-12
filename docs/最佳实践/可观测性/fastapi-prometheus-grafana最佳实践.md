# fastapi-prometheus-grafana 最佳实践

## 概述

记录如何从头搭建一个 fastapi-prometheus-grafana  的可观测体系。

## 依赖

- prometheus-client：Prometheus 官方 Python 客户端
- prometheus-fastapi-instrumentator：面向 FastAPI/Starlette 的自动埋点封装

## 步骤

- [ ] 在待测项目中增加 Prometheus 可观测性指标
