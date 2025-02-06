import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

type ArrowButtonProps = {
  onClick: () => void;
  disabled?: boolean;
  direction: "left" | "right";
  className?: string;
};

export const ReviewArrowButton: React.FC<ArrowButtonProps> = ({
  onClick,
  disabled,
  direction,
  className,
}) => {
  return (
    <Button
      onClick={onClick}
      disabled={disabled}
      variant="outline"
      size="icon"
      className={cn("h-11 w-11 rounded-full", className)}
    >
      {direction === "left" ? (
        <ArrowLeft className="h-4 w-4" />
      ) : (
        <ArrowRight className="h-4 w-4" />
      )}
      <span className="sr-only">
        {direction === "left" ? "Previous Review" : "Next Review"}
      </span>
    </Button>
  );
};
