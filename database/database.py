import sqlite3 


def show_all(table):
    """
    Query the DB and return all records
    """
        
    # connect to database and create a cursor
    connection = sqlite3.connect("task.db")
    c = connection.cursor()

    # query the database
    c.execute(f"SELECT * FROM {table}")
    items = c.fetchall()
    print(len(items))
    for item in items:
        print(item)

    # commit our command
    connection.commit()
    # Close our connection
    connection.close()


def add_one(table, values):
    """
    add a new record to the table
    """
    # connect to database and create a cursor
    connection = sqlite3.connect(f"{table}.db")
    c = connection.cursor()

    c.execute(f"INSERT INTO customers VALUES ({values})" )

    # commit our command
    connection.commit()
    # Close our connection
    connection.close()


def delete_one(id):
    """
    Deletes a record from the table
    """
    # connect to database and create a cursor
    connection = sqlite3.connect("customer.db")
    c = connection.cursor()

    c.execute(f"DELETE from customers Where rowid = {id}")

    # commit our command
    connection.commit()
    # Close our connection
    connection.close()

def create_table(table_name, datatypes):
    """
    Creates a table on our sql db
    """

    # connect to database and create a cursor
    connection = sqlite3.connect("task.db")
    c = connection.cursor()

    # query the database
    c.execute(f"""CREATE  TABLE {table_name} ({datatypes})""")

    # commit our command
    connection.commit()
    # Close our connection
    connection.close()

# comands used to build the tables
# TASK_TABLE = """
#     ID INTEGER,
#     TASK_GROUP VARCHAR(255),
#     DATE_TIME VARCHAR(255),
#     COLOR VARCHAR(255),
#     CHECKED BOOLEAN
# """
# TASK_GROUP_TABLE = """
#     ID INTEGER,
#     TASKS INTEGER,
#     NAME VARCHAR(100)
# """

