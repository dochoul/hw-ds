import PageTitle from '../components/document/PageTitle';

export default function Banner() {
  return (
    <div>
      <PageTitle
        title="Banner"
        description="
      배너는 콘텐츠 페이지 안에서 프로모션이나 정보를 팝오버 메시지 입니다.<br/>
      Banner는 항시 제공하거나 사용자가 제거할 수 있으며, 사용자가 제거를 선택한 이후 다시 제공되지 않습니다.<br/>
      배너는 사용자가 본문 내용을 인식하는데 방해가 되지 않도록 페이지내 1개만 사용 가능하며, 2개 이상의 배너가 동시에 제공될 수 없습니다.
      "
      />
    </div>
  );
}
