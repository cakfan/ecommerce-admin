import { ObjectId } from "bson";

import prismadb from "@/lib/prismadb";
import { CategoryForm } from "./components/category-form";

const randomId = new ObjectId();

const CategoryPage = async ({
  params,
}: {
  params: { categoryId: string; storeId: string };
}) => {
  const id =
    params.categoryId === "new" ? randomId.toString() : params.categoryId;
  const category = await prismadb.category.findUnique({
    where: {
      id,
    },
  });

  const billboards = await prismadb.billborad.findMany({
    where: {
      storeId: params.storeId,
    },
  });

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <CategoryForm billboards={billboards} initialData={category} />
      </div>
    </div>
  );
};

export default CategoryPage;
