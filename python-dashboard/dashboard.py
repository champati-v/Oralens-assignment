import tkinter as tk
from tkinter import filedialog, messagebox
from PIL import Image, ImageTk

def submit_form():
    name = name_entry.get()
    age = age_entry.get()
    file_path = file_label.cget("text")

    if not name or not age or file_path == "No file chosen":
        messagebox.showerror("Error", "All fields are required!")
        return

    try:
        age = int(age)
        messagebox.showinfo("Success", f"Form submitted successfully!\nName: {name}\nAge: {age}\nFile: {file_path}")
    except ValueError:
        messagebox.showerror("Error", "Age must be a number!")

def choose_file():
    file_path = filedialog.askopenfilename(filetypes=[("PDF files", "*.pdf"), ("Image files", "*.jpeg;*.jpg;*.png")])
    if file_path:
        file_label.config(text=file_path)

def create_background(root):
    try:
        # Load the background image
        bg_image = Image.open("doctor.png")  # Replace with the correct image path
        if not bg_image:
            raise FileNotFoundError("Background image not found")
        bg_image = bg_image.resize((root.winfo_screenwidth(), root.winfo_screenheight()), Image.Resampling.LANCZOS)
        bg_photo = ImageTk.PhotoImage(bg_image)

        bg_label = tk.Label(root, image=bg_photo)
        bg_label.image = bg_photo  # Keep a reference to prevent garbage collection
        bg_label.place(x=0, y=0, relwidth=1, relheight=1)

        # Add a semi-transparent overlay
        overlay = tk.Frame(root, bg="black")
        overlay.place(x=0, y=0, relwidth=1, relheight=1)
        overlay.configure(bg='black')  # Removed invalid opacity parameter
    except FileNotFoundError:
        # Fallback if image not found
        root.configure(bg='white')

def main():
    global name_entry, age_entry, file_label  # Make these variables global
    
    root = tk.Tk()
    root.title("Your Health, Our Priority")
    root.geometry("800x600")

    create_background(root)

    # Main content container
    container = tk.Frame(root, bg="#ffffff", relief="flat", padx=20, pady=20)
    container.place(relx=0.5, rely=0.5, anchor="center", width=600, height=400)

    # Title
    title_label = tk.Label(container, text="Your Health, Our Priority", font=("Arial", 24, "bold"), fg="#1e40af", bg="#ffffff")
    title_label.pack(pady=10)

    # Form fields
    form_frame = tk.Frame(container, bg="#ffffff")
    form_frame.pack(pady=20)

    # Name
    tk.Label(form_frame, text="Name", font=("Arial", 12), fg="#1e40af", bg="#ffffff").grid(row=0, column=0, sticky="w", pady=5)
    name_entry = tk.Entry(form_frame, font=("Arial", 12), width=30)
    name_entry.grid(row=0, column=1, pady=5)

    # Age
    tk.Label(form_frame, text="Age", font=("Arial", 12), fg="#1e40af", bg="#ffffff").grid(row=1, column=0, sticky="w", pady=5)
    age_entry = tk.Entry(form_frame, font=("Arial", 12), width=30)
    age_entry.grid(row=1, column=1, pady=5)

    # File Upload
    tk.Label(form_frame, text="Upload File (PDF/JPEG/PNG)", font=("Arial", 12), fg="#1e40af", bg="#ffffff").grid(row=2, column=0, sticky="w", pady=5)
    file_button = tk.Button(form_frame, text="Choose File", font=("Arial", 10), command=choose_file, bg="#2563eb", fg="#ffffff", relief="flat")
    file_button.grid(row=2, column=1, sticky="w", pady=5)

    file_label = tk.Label(form_frame, text="No file chosen", font=("Arial", 10), fg="#1e40af", bg="#ffffff")
    file_label.grid(row=3, column=1, sticky="w", pady=5)

    # Submit button
    submit_button = tk.Button(container, text="Submit", font=("Arial", 14), bg="#2563eb", fg="#ffffff", relief="flat", command=submit_form)
    submit_button.pack(pady=10)

    root.mainloop()

if __name__ == "__main__":
    main()
