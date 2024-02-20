﻿namespace HalloDoc.Models
{
    public class ViewDocumentVM
    {
        public int FileId { get; set; }

        public int AspNetUserId { get; set; }

        public int RequestId { get; set; }

        public string PatientName { get; set; }

        public string File {  get; set; }

        public DateTime UploadDate {  get; set; }

        //public User? user { get; set; }

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string? mobile { get; set; }

        public string State { get; set; }

        public string City { get; set; }

        public string Street { get; set; }

        public string ZipCode { get; set; }

        public DateOnly Date { get; set; }

        public User? user { get; set; }

        public List<IFormFile>? UploadFile { get; set; }

        public String Notes { get; set; }

        public string Room {  get; set; }
    }
}
