import PlayGround from "../components/PlayGround";
import PageTitle from "../components/document/PageTitle";
import Tooltip from "../components/ui/tooltip/Tooltip";

export default function TooltipPage() {
  return (
    <div className="tooltip-page">
      <PageTitle
        title="Tooltip"
        description="기능명 또는 선택 시 예상되는 동작 등 간략한 정보를 제공합니다.<br/>
마우스 호버시 자동으로 노출되며 포인트를 다른 곳으로 이동하면 사라집니다."
      ></PageTitle>
      <PlayGround width="480">
        <Tooltip label="안녕하세요">
          <button>툴팁</button>
        </Tooltip>
      </PlayGround>

      <h2>Bottom</h2>
      <PlayGround width="480">
        <Tooltip label="안녕하세요" position="bottom">
          <button>툴팁</button>
        </Tooltip>
      </PlayGround>

      <h2>Right</h2>
      <PlayGround width="480">
        <Tooltip label="안녕하세요" position="right">
          <button>툴팁</button>
        </Tooltip>
      </PlayGround>

      <h2>Left</h2>
      <PlayGround width="480">
        <Tooltip label="안녕하세요" position="left">
          <button>툴팁</button>
        </Tooltip>
      </PlayGround>

      <h2>Top-Start</h2>
      <PlayGround width="480">
        <Tooltip label="안녕하세요" position="top-start">
          <button>툴팁 😀😀😀😀😀😀😀</button>
        </Tooltip>
      </PlayGround>

      <h2>Top-Bottom</h2>
      <PlayGround width="480">
        <Tooltip label="안녕하세요" position="top-end">
          <button>툴팁 😀😀😀😀😀😀😀</button>
        </Tooltip>
      </PlayGround>

      <h2>Bottom-Start</h2>
      <PlayGround width="480">
        <Tooltip label="안녕하세요" position="bottom-start">
          <button>툴팁 😀😀😀😀😀😀😀</button>
        </Tooltip>
      </PlayGround>

      <h2>Bottom-End</h2>
      <PlayGround width="480">
        <Tooltip label="안녕하세요" position="bottom-end">
          <button>툴팁 😀😀😀😀😀😀😀</button>
        </Tooltip>
      </PlayGround>

      <Tooltip label="안녕하세요" background="red">
        <button>툴팁 배경색 변경</button>
      </Tooltip>
      <Tooltip label="안녕하세요" color="aquamarine">
        <button>툴팁 폰트 컬러 변경</button>
      </Tooltip>
    </div>
  );
}
