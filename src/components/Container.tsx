import { ReactNode } from "react";

interface ContainerProps {
    children: ReactNode;
}

export function Container(props: ContainerProps) {
    return <div style={{ display: 'flex', flexDirection: 'row' }}>
        {props.children}
    </div>
}
