import { ObjectId } from "bson";

import prismadb from "@/lib/prismadb";
import { BillboardsForm } from "./components/billboards-form";

const randomId = new ObjectId();

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const id =
    params.billboardId === "new" ? randomId.toString() : params.billboardId;
  const billboard = await prismadb.billborad.findUnique({
    where: {
      id,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardsForm initialData={billboard} />
      </div>
    </div>
  );
};

export default BillboardPage;
