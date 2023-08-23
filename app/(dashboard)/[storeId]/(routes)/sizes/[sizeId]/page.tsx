import { ObjectId } from "bson";

import prismadb from "@/lib/prismadb";
import { SizesForm } from "./components/sizes-form";

const randomId = new ObjectId();

const SizePage = async ({ params }: { params: { sizeId: string } }) => {
  const id = params.sizeId === "new" ? randomId.toString() : params.sizeId;
  const size = await prismadb.size.findUnique({
    where: {
      id,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <SizesForm initialData={size} />
      </div>
    </div>
  );
};

export default SizePage;
