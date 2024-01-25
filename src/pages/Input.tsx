import PlayGround from "../components/PlayGround";
import PageTitle from "../components/document/PageTitle";

export default function Input() {
  return (
    <div>
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
      <PlayGround title="Size">
        <div>
          <input type="text" placeholder="아이디 입력" />
          <input type="text" placeholder="비밀번호 입력" />
        </div>
      </PlayGround>
      <PlayGround
        title="States"
        description="Input의 사이즈는 Small과 Large 2가지와 텍스트 양에 따라 Input의 세로 높이가 바뀌는 가변형이 있습니다."
        width="1500"
      >
        <div>
          <input type="text" placeholder="아이디 입력" />
          <input type="text" placeholder="비밀번호 입력" />
        </div>
      </PlayGround>
    </div>
  );
}
