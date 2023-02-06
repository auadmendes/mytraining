import { ReactNode } from "react";
import { WorkoutContainer } from "./styles";

interface WorkoutProps {
  children: ReactNode;
  variant: boolean;
}

export function WorkoutBox({ children, variant }: WorkoutProps) {
  return (
    <WorkoutContainer variant={variant}>
      {children}
    </WorkoutContainer>
  )
}