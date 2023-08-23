import { ObjectId } from "bson";

import prismadb from "@/lib/prismadb";
import { ColorsForm } from "./components/colors-form";

const randomId = new ObjectId();

const ColorPage = async ({ params }: { params: { colorId: string } }) => {
  const id = params.colorId === "new" ? randomId.toString() : params.colorId;
  const size = await prismadb.color.findUnique({
    where: {
      id,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorsForm initialData={size} />
      </div>
    </div>
  );
};

export default ColorPage;
