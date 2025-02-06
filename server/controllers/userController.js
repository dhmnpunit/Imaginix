import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'


const registerUser = async (req, res) => {
    try {
        // taking data from request
        const {name, email, password} = req.body

        // is detail is missing, giving an error
        if(!name || !email || !password) {
            return res.json({success:false, message: 'Missing Details'})
        }
        
        // hashing the password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        // creating an object with the given data
        const userData = {
            name,
            email,
            password: hashedPassword
        }

        // creating a new user using the given data
        const newUser = new userModel(userData)
        // saving the user in the database
        const user = await newUser.save()

        // generating a token for authentication
        const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

        res.json({success: true, token, user: {name: user.name}})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
        
    }
}


const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({email})

        if(!user) {
            return res.json({success: false, message: 'User does not exist'})
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const isMatch = await bcrypt.compare(password, hashedPassword)

        if(isMatch) {
            const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)
            res.json({success: true, token, user: {name: user.name}})
        } else {
            return res.json({success: false, message: 'Invalid credentials'})
        }

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}


const userCredits = async (req, res) => {
    try {
        const { userId } = req.body

        const user = await userModel.findById(userId) 
        res.json({success: true, credits: user.creditBalance, user: {name: user.name}})

    } catch (error) {
        console.log(error);
        res.json({success: false, message: error.message})
    }
}

export { registerUser, loginUser, userCredits }