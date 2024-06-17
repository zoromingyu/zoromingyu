import {useState} from "react";
import {useCookies} from "react-cookie";
import {Link} from "react-router-dom";
import {toast} from "react-toastify";

const SignUp = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleSignup = (e) => {
        e.preventDefault();
        if(password !== confirmPassword){
            toast.error("Passwords do not match!");
            return;
        }
    };

    return (
        <div class="flex justify-center items-center h-screen bg-[#0C1D32]">
            <div class="flex flex-col content-center items-center px-20 py-16 bg-white rounded opacity-90 gap-y-7">
                <div class="text-4xl font-semibold text-[#0C1D32]">Create a new account</div>
                <div class="flex flex-col gap-y-5">
                    <div>
                        <form onSubmit={handleSignup}>
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
                                        class="border-2 rounded h-10 border-gray-500 pl-4"
                                        type="email"
                                        placeholder="Email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required
                                    />
                                    <input
                                        class="border-2 rounded h-10 border-gray-500 pl-4"
                                        type="password"
                                        placeholder="Password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                    />
                                    <input
                                        class="border-2 rounded h-10 border-gray-500 pl-4"
                                        type="password"
                                        placeholder="Reenter Password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                    />
                                </div>
                                <button class="bg-[#0C1D32] rounded-3xl text-white h-10" type="submit">Sign up</button>
                            </div>
                        </form>
                    </div>
                    <div class="flex flex-row space-x-1">
                        <div>Already have an account?</div>
                        <Link to="/">Log in</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;