export const TRACKS = [
  {
    title: "Emotion",
    subtitle: "기술로 공포와 탐욕을 다루기",
    body: "투자에서 가장 제어하기 힘든 '인간의 감정'은 기술을 통해 통제할 수도, 반대로 대중의 심리를 읽어내 강력한 지표로 활용할 수도 있습니다. 감정이라는 변수를 지배하고 활용하는 새로운 프로덕트를 설계해 보세요.",
  },
  {
    title: "Beyond Asymmetry",
    subtitle: "정보·시간·경험의 비대칭을 넘어",
    body: "시간이 부족한 사람도, 투자에 일가견이 없는 사람에게도 투자가 친절해질 수 있을까요? 정보·시간·경험의 비대칭성을 넘을 수 있도록 돕는 도구를 고민해 보세요. (예. 정보 제공 툴)",
  },
] as const;

export const UPBIT_GUIDE = {
  title: "업비트 생태계 위에서 마음껏 놀아보세요!",
  body: "여러분의 창의적인 아이디어를 현실로 만들어 줄 업비트의 공식 리소스들을 적극 활용해 보세요.",
  note: "어떤 리소스를 어떻게 활용했는지 최종 발표에 명시해주세요.",
} as const;

export const TRACK_DISCLAIMER = {
  title: "디스클레이머",
  body: "본 주제는 투자자문·일임 등 규제 대상 금융·가상자산 서비스를 구현하는 것을 목적으로 하지 않습니다. 참가작은 가상자산이용자보호법, 특정금융정보법, 개인정보보호법 및 관련 규제를 준수해야 하며, 투자성과를 보장하거나 오인하게 하는 표현을 사용해서는 안 됩니다.",
} as const;

export const UPBIT_RESOURCES = [
  {
    label: "업비트 개발자 센터",
    href: "https://docs.upbit.com/kr",
  },
  {
    label: "업비트 공식 GitHub",
    href: "https://github.com/upbit-official",
  },
] as const;

export const TRACK_CHECKPOINTS = [
  {
    title: "BM 타당성을 고려하세요 (현실성 체크!)",
    body: "좋은 아이디어가 실제 서비스가 되기 위해서는 개인정보, 보안, 관련 법령, 이용약관, 사용자 보호 등 다양한 현실적 조건을 통과해야 합니다. 팀의 아이디어가 세상에 안착하려면 어떤 설계가 필요한지도 함께 고민해주세요.",
  },
  {
    title: "서비스화 최소 체크포인트",
    body: "사용자의 API Key나 Secret Key를 서버에 직접 저장하지 않는 구조로 설계해 주세요. 필요한 경우 사용자의 로컬 환경에 저장/구동되도록 안전하게 설계해 주세요.",
  },
  {
    title: "결과물의 형태에는 제약이 없습니다",
    body: "웹앱, 모바일 웹, 데스크톱 앱, CLI, AI Agent, MCP(Model Context Protocol), 데이터 대시보드, 브라우저 확장 도구, 로컬 스크립트 등 아이디어를 가장 잘 담을 수 있는 그릇을 자유롭게 선택하세요.",
  },
] as const;
