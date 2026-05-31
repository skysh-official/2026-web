# 2026 skysh

서울대 × 고려대 × 연세대 × 성균관대 × 한양대 연합 개발 대회 랜딩 페이지입니다.

## Local

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

정적 산출물은 `out/`에 생성됩니다. GitHub Pages에서 `_next` 정적 파일이 정상 제공되도록 `out/.nojekyll`도 함께 생성됩니다.

## GitHub Pages

이 저장소는 GitHub Pages 정적 배포 기준으로 설정되어 있습니다.

1. GitHub 저장소의 Settings → Pages로 이동합니다.
2. Build and deployment → Source를 `GitHub Actions`로 설정합니다.
3. 코드를 `main` 또는 `master` 브랜치에 push합니다.

```bash
git add .
git commit -m "Deploy SKYSH landing page"
git push origin main
```

4. Actions 탭에서 `Deploy GitHub Pages` workflow가 성공했는지 확인합니다.
5. 배포 URL은 Actions의 deploy job 또는 Settings → Pages에서 확인합니다.

프로젝트 페이지(`https://사용자명.github.io/저장소명/`)에서는 workflow가 저장소명을 기준으로 base path를 자동 설정합니다. 예를 들어 저장소명이 `skysh`이면 정적 자산은 `/skysh/_next/...` 경로로 빌드됩니다.

사용자/조직 루트 페이지(`https://사용자명.github.io/`)는 저장소명이 `사용자명.github.io`일 때 자동으로 base path 없이 빌드됩니다.

커스텀 도메인처럼 루트 경로에 배포해야 하는 경우 `.github/workflows/deploy-pages.yml`의 `Build static site` 단계에 아래 환경변수를 추가하세요.

```yaml
env:
  GITHUB_PAGES: "true"
  NEXT_PUBLIC_BASE_PATH: ""
```

## Preview Static Build

GitHub Pages에 올리기 전 정적 산출물을 확인하려면:

```bash
npm run build
npx serve out
```

PowerShell에서 `npm.ps1` 실행 정책 오류가 나면 `npm.cmd`를 사용하세요.

```powershell
npm.cmd run build
npx.cmd serve out
```
