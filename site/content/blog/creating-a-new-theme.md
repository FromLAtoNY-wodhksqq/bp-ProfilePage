+++
title = "대학 전공 매칭 프로그램 Trail 개발"
description = "본인 적성에 맞는 대학 전공을 매칭하는 프로그램 Trail 개발 활동을 소개합니다."
summary = "본인 적성에 맞는 대학 전공을 매칭하는 프로그램 Trail 개발 활동입니다."
type = "blog"
weight = 4
url = "/blog/trail/"
categories = ["개발"]
banner = "img/banners/banner-1.jpg"
+++

## 진행 상태와 역할

2026년 7월에 개발한 팀 프로젝트로, 현재 개발이 완료되었습니다. 팀 작업 중 저는 Agent 개발을 담당했습니다.

## Trail은 어떤 프로그램인가요?

Trail은 본인 적성에 맞는 대학 전공을 매칭하는 프로그램입니다.

## 개발 목적

본인의 적성에 맞는 대학 전공을 찾을 수 있도록 돕는 것을 목적으로 합니다.

## Agent가 하는 일

TRAIL의 Agent는 현재까지 수집된 근거(Evidence)의 상태에 따라 다음에 무엇을 물을지 결정하는 Bounded Adaptive Agent입니다. 질문 생성과 검수, 근거 간 충돌(Conflict) 확인, 종료 흐름을 관리합니다.

학생의 적성을 자유롭게 판단하는 자율형 Agent가 아니라, 정해진 역할과 규칙 안에서 질문 흐름을 조정합니다. LLM은 질문 문장을 만드는 역할을 맡고, 특성(Trait) 판정과 전공 추천은 검수된 매핑(Mapping)과 규칙 기반 엔진이 수행합니다.

[활동 목록으로 돌아가기](../)
