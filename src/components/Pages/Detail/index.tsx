import { useParams } from "next/navigation";

interface DetailPageProps {}
const DetailPage: React.FC<DetailPageProps> = (): JSX.Element => {
  const param = useParams();
  return <div>{param?.id}</div>;
};

export default DetailPage;
