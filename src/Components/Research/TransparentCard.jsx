import React from "react";
import { Card, CardBody, Image } from "@heroui/react";

const TransparentCard = () => {
  return (
    <Card className="flex items-center bg-transparent shadow-none p-4 w-full max-w-xl">
      <Image
        src="https://via.placeholder.com/120"
        alt="Card Image"
        className="rounded-xl w-[120px] h-[120px] object-cover"
      />
      <CardBody className="ml-6">
        <h3 className="text-xl font-semibold text-white">Card Title</h3>
        <p className="text-sm text-white/80 mt-2">
          This is a transparent card with an image on the left and some content on the right.
        </p>
      </CardBody>
    </Card>
  );
};

export default TransparentCard;
