import React, {useState} from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();

    };

    return (
        <div class="flex justify-center items-center h-screen bg-[#0C1D32]">
            <div class="flex flex-col content-center items-center px-20 py-16 bg-white rounded opacity-90 gap-y-7">
                <div class="text-4xl font-semibold text-[#0C1D32]">Sign in to BeatBoxd</div>
                <div class="flex flex-col gap-y-5">
                    <div>
                        <form onSubmit={handleLogin}>
                            <div class="flex flex-col gap-y-5">
                                <div class="flex flex-col gap-y-2">
                                    <input
                                        class="border-2 rounded h-10 border-gray-500 pl-4"
                                        type="username"
                                        placeholder="Username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        required
                                    />
                                    <input
                                        class="border-2 rounded h-10 text-black border-gray-500 pl-4"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button class="bg-[#0C1D32] rounded-3xl text-white h-10" type="submit">Log in</button>
                            </div>
                        </form>
                    </div>
                    <div class="flex flex-row space-x-1">
                        <div>Don't have an account yet?</div>
                        <Link to="/signup">Sign up</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;