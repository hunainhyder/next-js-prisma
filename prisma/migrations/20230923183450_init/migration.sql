/*
  Warnings:

  - A unique constraint covering the columns `[course]` on the table `Student` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Student_course_key" ON "Student"("course");
