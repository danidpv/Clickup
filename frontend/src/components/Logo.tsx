import { Link } from 'react-router-dom'

export default function Logo() {
    return (
        <Link to={'/'}>
            <p className="w-full block text-5xl text-white font-extrabold">ClickUp</p>
        </Link>
    )
}
