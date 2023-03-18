<script lang='ts'>
	import { goto, invalidateAll } from "$app/navigation";
	import type { Snapshot } from "./$types";


    let username = '';
    let password = '';

    export const snapshot: Snapshot<{ username: string; password: string}> ={
        capture: () => {
            return {
                username,
                password
            }
        },
        restore: (value) => {
            username = value.username;
            password = value.password;
        }
    }

    const login = async () => {
        const response = await fetch('/api/login', {
            method: 'POST',
            body: JSON.stringify({ username, password }),
        });
        const resJSON = await response.json();
        console.log(resJSON)
        if(response.ok){
            // goto('/', {
            //     invalidateAll: true,
            // });
            invalidateAll();
        } else {
            alert(resJSON.message);
        }
    }
</script>

<form on:submit|preventDefault={login}>
    <label for='username'>Username</label><br />
    <input bind:value={username} id='username' name='username' placeholder="Username" />
    <br />

    <label for='password'>Password</label><br />
    <input bind:value={password} id='password' name='password' placeholder="Password" />
    <br />
    <br />

    <button type='submit'>Login</button>
</form>