import { Typewriter } from "../pioneerui/typewriter";

export default function TypewriterDemo() {
    return (
        <div>
            <Typewriter
                text="Hello, World!"
                delay={100}
                className="text-3xl"
                typingStyle="mechanical"
            />
        </div>
    );
}

