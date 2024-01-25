import PageTitle from "../components/document/PageTitle";

export default function Loading() {
  return (
    <div>
      <PageTitle
        title="Loading"
        description="Loading는 실행중인 프로세스의 현 상태와 완료까지의 잔여 시간을 정확히 알 수 없을 때 사용합니다.<br/>
        진행 중인 프로세스가 완료되면 Loading는 자동으로 사라집니다."
      ></PageTitle>
    </div>
  );
}
