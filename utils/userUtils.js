import bcrypt from 'bcrypt';


export const hashPassword = async (pwd) => {
    try {
        const saltRounds = 10;
        const newpassword = await bcrypt.hash(pwd, saltRounds);
        return newpassword;
    } catch (error) {
        console.log(error);
    }
}


export const comparePassowrd = async (p1, p2) => {
    try {
        const compare = await bcrypt.compare(p1, p2);
        return compare;
    } catch (error) {
        console.log(error);
    }
}