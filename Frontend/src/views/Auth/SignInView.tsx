import { FormEvent, useState } from "react";
import { useAuth } from "@/controllers/AuthContext";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Link, useNavigate } from "react-router-dom";

const SignInView = () => {
  const { signIn } = useAuth();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      console.log('before signIn');
      await signIn(email, password);
      console.log('after signIn');
      navigate("/dashboard");
    } catch (err: any) {
      setError(err?.message ?? "Unable to sign in");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background p-4">
      <form onSubmit={onSubmit} className="w-full max-w-md bg-card p-6 rounded-xl border border-border shadow">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign In</h1>
        {error && <p className="text-red-600 text-sm mb-4">{error}</p>}
        <div className="space-y-4">
          <Input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} required />
          <Input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} required />
          <Button type="submit" className="w-full">Sign In</Button>
        </div>
        <p className="text-sm text-muted-foreground mt-4 text-center">
          No account? <Link className="text-accent" to="/signup">Sign Up</Link>
        </p>
      </form>
    </div>
  );
};

export default SignInView;


