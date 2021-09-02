import '../styles/tailwind.css';
import '../styles/Home.modules.css'

export default function Card(props) {

    return (
        <div class="m-1 hover:m-0 transition-all delay-75 duration-300 ease-in-out h-60 rounded-md shadow-md bg-gray-50">
            <h1 className="m-2 mb-8 text-4xl">{props.title}</h1>
        </div>
    );
};