Auto Search Folder
==================

Provides ability to create serch folders automatically.

# How to add a new search folder?

For example, assume that you are going to add a new search folder which searches mails with a subject begenning with "[Important]".

 1. Define the internal type name. Now I use `important`.
 2. Define name of the folder. It must be defined as a string preference, like:
    
        pref("extensions.typical-reply@clear-code.com.folders.important.label",     "Important");
    
    The part `extensions.typical-reply@clear-code.com.folders.` is the common prefix.
 3. Define subject prefix or subject to be matched.
    
        pref("extensions.typical-reply@clear-code.com.folders.important.subjectPrefix", "[Important]");
        pref("extensions.typical-reply@clear-code.com.folders.important.subject",       "");
    
 4. Define search targets of the virtual folder.
    
        pref("extensions.typical-reply@clear-code.com.folders.important.searchTargets", "all");
    
    This addon automatically generates a virutal folder for the type, in all accounts.
    You can customize list of folders which via the preference item `searchTargets`.
    
    * `all`: Finds all messages from all folders of the account.
    * `inbox`: Finds messges only from the inbox.

Finally you'll get a configurations for the new button, like following:

~~~
pref("extensions.typical-reply@clear-code.com.folders.important.label",         "Awesome!");
pref("extensions.typical-reply@clear-code.com.folders.important.subjectPrefix", "[[!Awesome]]");
pref("extensions.typical-reply@clear-code.com.folders.important.subject",       "");
pref("extensions.typical-reply@clear-code.com.folders.important.searchTargets", "all");
~~~
