import { useWindowSize } from "../hooks/useWindowSize";

export function Window(){
    const {width,height} = useWindowSize();
    // console.log(size)

    return(
        <div>
            <h2>Window Size</h2>
            <p>Width:{width}</p>
            <p>Height:{height}</p>
        </div>
    );
}