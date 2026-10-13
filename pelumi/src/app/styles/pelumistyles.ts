import { StyleSheet } from 'react-native';

export const pelumistyles = StyleSheet.create({
  container: {
   
flex: 1,
    backgroundColor: '#F1FAF4',
  },

  content: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 30,
  },

  title: {
    fontSize: 36,
    fontWeight: '700',
    color: '#086B4F',
    marginBottom: 12,
  },

  subtitle: {
    fontSize: 20,
    color: '#145C4C',
    marginBottom: 45,
  },

  roleContainer: {
    alignSelf: 'center',
    width: '100%',
    height: 70,
    borderWidth: 1,
    borderColor: '#D4DED9',
    borderRadius: 22,
    flexDirection: 'row',
    overflow: 'hidden',
    marginBottom: 80,
  },

  roleButton: {
    width: '50%',
    justifyContent: 'center',
    alignItems: 'center',
  },

  activeRole: {
    backgroundColor: '#07835F',
    borderRadius: 20,
  },

  roleText: {
    fontSize: 20,
    fontWeight: '600',
    color: '#111',
    textAlign: 'center',
  },

  activeRoleText: {
    color: '#FFF',
  },

  inputContainer: {
    height: 70,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D8E1DD',
    borderRadius: 20,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
  },

  icon: {
    fontSize: 25,
    color: '#087C5D',
    marginRight: 15,
  },

  input: {
    flex: 1,
    fontSize: 18,
    color: '#222',
  },

  eye: {
    fontSize: 27,
    color: '#087C5D',
  },

  forgotContainer: {
    alignItems: 'flex-end',
    marginTop: 8,
    marginBottom: 80,
  },

  forgot: {
    color: '#087C5D',
    fontSize: 17,
    fontWeight: '600',
  },

  loginButton: {
    height: 70,
    backgroundColor: '#07835F',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loginText: {
    color: '#FFF',
    fontSize: 21,
    fontWeight: '700',
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 65,
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#D5DED9',
  },

  orText: {
    marginHorizontal: 18,
    color: '#888',
    fontSize: 16,
  },

  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 35,
  },

  socialButton: {
    width: 72,
    height: 72,
    backgroundColor: '#FFF',
    borderWidth: 1,
    borderColor: '#D8E1DD',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },

  google: {
    fontSize: 32,
    fontWeight: '700',
    color: '#4285F4',
  },

  apple: {
    fontSize: 30,
    color: '#000',
  },

  facebook: {
    fontSize: 34,
    fontWeight: '700',
    color: '#1877F2',
  },

  signupContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 'auto',
    marginBottom: 35,
  },

  signupText: {
    fontSize: 17,
    color: '#222',
  },

  signup: {
    fontSize: 17,
    color: '#087C5D',
    fontWeight: '700',
  },

});