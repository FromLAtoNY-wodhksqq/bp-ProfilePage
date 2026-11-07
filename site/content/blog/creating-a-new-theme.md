+++
title = "대학 전공 매칭 프로그램 Trail 개발"
description = "본인 적성에 맞는 대학 전공을 매칭하는 프로그램 Trail 개발 활동을 소개합니다."
summary = "본인 적성에 맞는 대학 전공을 매칭하는 프로그램 Trail 개발 활동입니다."
type = "blog"
weight = 4
url = "/blog/trail/"
categories = ["개발"]
banner = "img/activities/trail-start-screen.png"
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

## 직접 진행한 개발 과정

1. 24개 특성으로 구성된 Trait Ontology와 선택지–Trait Mapping을 설계했습니다.
2. Evidence 누적, Conflict 처리, Adaptive 질문 흐름을 구현했습니다.
3. ContextPack 문항을 검수하고 Persona 테스트와 E2E 회귀 테스트를 진행했습니다.

## LLM과 규칙 기반 엔진의 역할을 나눈 이유

LLM은 상황과 앞선 흐름에 맞는 자연스러운 질문 표현에 강하지만, 같은 답변을 항상 동일하게 판정하거나 판정 근거를 재현하는 용도로는 적합하지 않다고 판단했습니다.

그래서 LLM은 질문 생성에만 사용하고, Trait Evidence 계산과 질문 종료, 전공 추천은 검수된 Mapping과 규칙 기반 엔진이 담당하도록 구성했습니다. 이를 통해 결과의 일관성, 설명 가능성, 재현성을 확보하고자 했습니다.

## 활동 이미지

![TRAIL 시작 화면: 좋아하는 이야기를 따라가면 진로가 보이기 시작해요](../../img/activities/trail-start-screen.png)

Trail의 시작 화면입니다. 서비스 소개와 질문 시작 버튼이 표시됩니다.

[활동 목록으로 돌아가기](../)
