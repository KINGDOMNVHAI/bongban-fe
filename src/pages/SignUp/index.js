
const SignUp = () => {

    const [inputIndex, setInputIndex] = useState(null);
    const [isShowPassword, setIsShowPassword] = useState(false);
    const context = useContext(MyContext);

    useEffect(() => {
        context.setIsHideSidebarAndHeader(true);
    },[])

    const focusInput = (index) => {
        setInputIndex(index);
    }

    return (
        <></>
    )
}

export default SignUp;
