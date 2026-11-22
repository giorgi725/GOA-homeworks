# 13) დაწერეთ Linked List-ის append(), prepend(), search() და delete() მეთოდები. ახსენით თითოეული მეთოდის მუშაობა ნაბიჯ-ნაბიჯ და განსაზღვრეთ მათი დროითი სირთულე. განიხილეთ შემთხვევები, როდესაც სია ცარიელია, საძიებო ელემენტი არ არსებობს ან წასაშლელი ელემენტი Head-ია

class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        current = self.head
        while current.next is not None:
            current = current.next
        current.next = new_node

    def prepend(self, data):
        new_node = Node(data)
        new_node.next = self.head
        self.head = new_node

    def search(self, data):
        current = self.head
        while current is not None:
            if current.data == data:
                return True
            current = current.next
        return False

    def delete(self, data):
        if self.head is None:
            return
        if self.head.data == data:
            self.head = self.head.next
            return
        current = self.head
        while current.next is not None:
            if current.next.data == data:
                current.next = current.next.next
                return
            current = current.next

    def display(self):
        current = self.head
        while current is not None:
            print(current.data, end=" -> ")
            current = current.next
        print("None")


my_list = LinkedList()
my_list.append(10)
my_list.append(20)
my_list.append(30)
my_list.prepend(5)
my_list.display()
print(my_list.search(20))
my_list.delete(20)
my_list.display()