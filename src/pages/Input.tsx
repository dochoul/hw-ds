import PlayGround from "../components/PlayGround";
import PageTitle from "../components/document/PageTitle";

export default function Input() {
  return (
    <>
      <PageTitle
        title="Input"
        description="Input은 문자, 숫자, 기호등을 입력하고 편집할 수 있는 입력 컴포넌트입니다."
      />
      <PlayGround>
        <div>
          <input type="text" placeholder="아이디 입력" />
          <input type="text" placeholder="비밀번호 입력" />
        </div>
      </PlayGround>

      <PlayGround title="Anatomy">
        <img src="./input.png" alt="" />
      </PlayGround>
      {/* <div>
        <ul
          style={{
            marginBottom: "50px",
            marginTop: "-50px",
            color: "#666",
            fontSize: "15px",
          }}
        >
          <li>
            1️⃣ Field Box : 입력 필드를 나타내는 영역입니다. 높이값은 34px 이며
            컬러값은 #D6D6D6 상태에 따라 다른 컬러로 변경됩니다.
          </li>
          <li>
            2️⃣ Text area : 입력 전에는 플레이스홀더가 노출되며, 입력중과 입력
            후에는 사용자가 입력한 내용을 표기합니다.
          </li>
          <li>
            3️⃣ Helper text : Text field에 입력해야하는 내용에 대한 유효하지 않은
            값이 입력되면 에러 문구를 노출할 수 있습니다.
          </li>
          <li>4️⃣ Reset button : 입력된 내용을 한번에 삭제하는 버튼입니다.</li>
        </ul>
      </div> */}

      <PlayGround title="States">
        <div>
          <input type="text" placeholder="아이디 입력" />
          <input type="text" placeholder="비밀번호 입력" />
        </div>
      </PlayGround>
      <PlayGround title="Variants">
        <div>
          <input type="text" placeholder="아이디 입력" />
          <input type="text" placeholder="비밀번호 입력" />
        </div>
      </PlayGround>
      <PlayGround
        title="Size"
        description="Input의 사이즈는 Small과 Large 2가지와 텍스트 양에 따라 Input의 세로 높이가 바뀌는 가변형이 있습니다."
        type="gray"
      >
        <div>Small, Large, Flexible(?)</div>
      </PlayGround>
      <PlayGround
        title="격자무늬배경"
        description="격자무늬배경 샘플"
        width="1500"
        type="grid"
      >
        <div>
          <input type="text" placeholder="아이디 입력" />
          <input type="text" placeholder="비밀번호 입력" />
        </div>
      </PlayGround>
    </>
  );
}
