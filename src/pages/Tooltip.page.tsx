import PageTitle from "../components/document/PageTitle";
import Tooltip from "../components/ui/Tooltip";

export default function TooltipPage() {
  return (
    <div>
      <PageTitle
        title="Tooltip"
        description="기능명 또는 선택 시 예상되는 동작 등 간략한 정보를 제공합니다.<br/>
마우스 호버시 자동으로 노출되며 포인트를 다른 곳으로 이동하면 사라집니다."
      ></PageTitle>
      <Tooltip label="안녕하세요">
        <button>Hover</button>
      </Tooltip>
      <Tooltip label="안녕하세요<br>안녕하세요<br>안녕하세요" position="left">
        <button>Hover</button>
      </Tooltip>

      <Tooltip label="안녕하세요" position="top">
        <button>Top</button>
      </Tooltip>
      <Tooltip label="안녕하세요" position="bottom">
        <button>Bottom</button>
      </Tooltip>
      <Tooltip label="안녕하세요" position="right">
        <button>Right</button>
      </Tooltip>
      <Tooltip label="안녕하세요" position="top-left">
        <button>Top Left 😀😀😀😀😀</button>
      </Tooltip>
      <Tooltip label="안녕하세요" position="top-right">
        <button>Top Right 🥰🥰🥰🥰🥰</button>
      </Tooltip>
      <Tooltip label="안녕하세요" position="bottom-left">
        <button>Bottom Left 😅😅😅😅😅</button>
      </Tooltip>
      <Tooltip label="안녕하세요" position="bottom-right">
        <button>Bottom Right 😛😛😛😛😛</button>
      </Tooltip>
      <Tooltip label="안녕하세요" background="red">
        <button>툴팁 배경색 변경</button>
      </Tooltip>
      <Tooltip label="안녕하세요" color="aquamarine">
        <button>툴팁 폰트 컬러 변경</button>
      </Tooltip>
    </div>
  );
}
