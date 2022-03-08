WIP

-Login/Signup
--Will use sessions, backend already setup


-Redux conversion
--Broke live search, temp. disabled
--main search returns error if one character or space as search term
---solutions: 
----Form validation?  only let form be submitted if at least a 2 char search



March 7:
---Fixed form validation by using Formik.  Also now using onkeyup to trigger the state change in the main container. this same concept can be easily extended to use live search.  Next update will be fixing live search (then republishing finally), following that will be to connect to rails backend and add user login.   