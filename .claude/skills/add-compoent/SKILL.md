---
name: add-compoent
description: 인자로 받은 이름으로 app/components 폴더에 React 컴포넌트(.tsx) 파일을 일관된 형식으로 생성합니다. "컴포넌트 추가해줘", "add component" 같은 요청에 사용하세요.
---

# add-compoent

`app/components` 디렉토리에 일관된 형식의 React 컴포넌트 파일을 생성하는 skill입니다.

## 사용법

인자로 컴포넌트 이름을 하나 받습니다.

```
/add-compoent Button
```

## 동작 순서

1. 전달받은 인자를 컴포넌트 이름으로 사용합니다. 인자가 없으면 사용자에게 컴포넌트 이름을 물어봅니다.
2. 컴포넌트 이름의 첫 글자가 소문자면 대문자로 변환합니다 (React 컴포넌트는 PascalCase여야 JSX에서 태그로 인식됩니다). 예: `button` → `Button`.
3. 대상 경로는 `app/components/<ComponentName>.tsx` 입니다.
4. 해당 경로에 이미 파일이 존재하면 덮어쓰지 말고 사용자에게 먼저 확인합니다.
5. 아래 템플릿 그대로 파일을 생성합니다. 이 프로젝트의 `app/page.tsx`와 동일한 스타일(화살표 함수 선언 + default export)을 따릅니다.

### 템플릿

```tsx
const <ComponentName> = () => {
	return <></>;
};

export default <ComponentName>;
```

`<ComponentName>`은 2번에서 정리한 PascalCase 이름으로 치환합니다. 들여쓰기는 탭(4칸 폭) 기준을 따릅니다.

## 예시

인자로 `card`를 받으면 `app/components/Card.tsx` 파일을 아래 내용으로 생성합니다.

```tsx
const Card = () => {
	return <></>;
};

export default Card;
```
