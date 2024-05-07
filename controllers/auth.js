const signin = async (req, res) => {
    const { email, password } = req.body;
    try {
      const existingUser = await userModel.findOne({ email: email });
      if (!existingUser) {
        return res.status(404).json({ message: "User not found!" });
      }
  
      const matchPassword = await bcrypt.compare(password, existingUser.password);
      {
        if (!matchPassword) {
          return res.status(404).json({ message: "Invalid credentionals" });
        }
        const token = jwt.sign(
          { email: existingUser.email, id: existingUser._id },
          SECRET_KEY
        );
        res.status(201).json({ user: existingUser, token: token });
      }
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Something went wrong" });
    }
  };