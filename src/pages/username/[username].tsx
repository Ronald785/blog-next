import Container from "@/styles/container";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Dynamic() {
    const router = useRouter();
    const [counter, setCounter] = useState(0);

    return (
        <Container
            onClick={() => {
                setCounter(counter + 1);
            }}
        >
            <h1>Usuário: {router.query.username}</h1>
            <h2>{counter}</h2>
        </Container>
    );
}
